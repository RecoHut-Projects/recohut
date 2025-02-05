---
jupyter:
  jupytext:
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.13.7
  kernelspec:
    display_name: Python [conda env:keras]
    language: python
    name: conda-env-keras-py
---

# Face Recognition

```python colab={"base_uri": "https://localhost:8080/", "height": 170} colab_type="code" executionInfo={"elapsed": 25126, "status": "ok", "timestamp": 1588893390899, "user": {"displayName": "Sparsh Agarwal", "photoUrl": "", "userId": "13037694610922482904"}, "user_tz": -330} id="YB5StBDxZi3A" outputId="b8255eaa-636f-46b8-80b7-859f9da81234"
!git clone https://github.com/sparsh-ai/class.vision
%cd 'class.vision/30-FaceRecognition_verification'
```

```python colab={"base_uri": "https://localhost:8080/", "height": 34} colab_type="code" executionInfo={"elapsed": 29825, "status": "ok", "timestamp": 1588893395612, "user": {"displayName": "Sparsh Agarwal", "photoUrl": "", "userId": "13037694610922482904"}, "user_tz": -330} id="myTCsxR4XzTC" outputId="d0cd49c5-08b0-4fdf-e181-c259b438d2cf"
%tensorflow_version 1.x
import tensorflow as tf
import numpy as np
```

```python colab={"base_uri": "https://localhost:8080/", "height": 34} colab_type="code" executionInfo={"elapsed": 1509, "status": "ok", "timestamp": 1588893401502, "user": {"displayName": "Sparsh Agarwal", "photoUrl": "", "userId": "13037694610922482904"}, "user_tz": -330} id="hPDFu5t_Z7FB" outputId="5ce668a2-6c51-4ea7-cd2a-832998c351c2"
import keras
keras.backend.set_image_data_format('channels_first')
```

```python colab={} colab_type="code" id="hMjgf-VFaBXC"
from fr_utils import img_to_encoding, load_weights_from_FaceNet
from inception_blocks_v2 import faceRecoModel
%matplotlib inline
```

<!-- #region colab_type="text" id="VLJ_HCJqXzTP" -->
### Using an ConvNet  to compute encodings

The FaceNet model takes a lot of data and a long time to train. So following common practice in applied deep learning settings, let's just load weights that someone else has already trained. The network architecture follows the Inception model from [Szegedy *et al.*](https://arxiv.org/abs/1409.4842). We have provided an inception network implementation. You can look in the file `inception_blocks.py` to see how it is implemented.

<!-- #endregion -->

<!-- #region colab_type="text" id="fBE1hvECXzTR" -->
The key things you need to know are:

- This network uses 96x96 dimensional RGB images as its input. Specifically, inputs a face image (or batch of $m$ face images) as a tensor of shape $(m, n_C, n_H, n_W) = (m, 3, 96, 96)$ 
- It outputs a matrix of shape $(m, 128)$ that encodes each input face image into a 128-dimensional vector

Run the cell below to create the model for face images.
<!-- #endregion -->

```python colab={"base_uri": "https://localhost:8080/", "height": 156} colab_type="code" executionInfo={"elapsed": 4503, "status": "ok", "timestamp": 1588893413217, "user": {"displayName": "Sparsh Agarwal", "photoUrl": "", "userId": "13037694610922482904"}, "user_tz": -330} id="Wd5ljpmAXzTS" outputId="b030884c-6684-4bae-afda-7afb65d211e9"
FRmodel = faceRecoModel(input_shape=(3, 96, 96))
```

```python colab={"base_uri": "https://localhost:8080/", "height": 34} colab_type="code" executionInfo={"elapsed": 1363, "status": "ok", "timestamp": 1588893422502, "user": {"displayName": "Sparsh Agarwal", "photoUrl": "", "userId": "13037694610922482904"}, "user_tz": -330} id="M4RxC-NhXzTY" outputId="7e258937-f93e-4519-e839-2dfc540215e1"
print("Total Params:", FRmodel.count_params())
```

```python colab={} colab_type="code" id="ld6Saq-RXzTk"
def triplet_loss(y_true, y_pred, alpha = 0.2):
    """
    Implementation of the triplet loss as defined by formula (3)
    
    Arguments:
    y_true -- true labels, required when you define a loss in Keras, you don't need it in this function.
    y_pred -- python list containing three objects:
            anchor -- the encodings for the anchor images, of shape (None, 128)
            positive -- the encodings for the positive images, of shape (None, 128)
            negative -- the encodings for the negative images, of shape (None, 128)
    
    Returns:
    loss -- real number, value of the loss
    """
    
    anchor, positive, negative = y_pred[0], y_pred[1], y_pred[2]
    
    # Step 1: Compute the (encoding) distance between the anchor and the positive, you will need to sum over axis=-1
    pos_dist = tf.reduce_sum(tf.square(tf.subtract(anchor, positive)), axis=-1)
    # Step 2: Compute the (encoding) distance between the anchor and the negative, you will need to sum over axis=-1
    neg_dist = tf.reduce_sum(tf.square(tf.subtract(anchor, negative)), axis=-1)
    # Step 3: subtract the two previous distances and add alpha.
    basic_loss =  tf.add(tf.subtract(pos_dist , neg_dist) , alpha)
    # Step 4: Take the maximum of basic_loss and 0.0. Sum over the training examples.
    loss = tf.reduce_sum(tf.maximum(basic_loss, 0))
    
    return loss
```

<!-- #region colab_type="text" id="dLEPaRadXzTq" -->
### Loading the trained model

FaceNet is trained by minimizing the triplet loss. But since training requires a lot of data and a lot of computation, we won't train it from scratch here. Instead, we load a previously trained model. Load a model using the following cell; this might take a couple of minutes to run. 
<!-- #endregion -->

```python colab={} colab_type="code" id="-6kvayx5XzTr"
FRmodel.compile(optimizer = 'adam', loss = triplet_loss, metrics = ['accuracy'])
load_weights_from_FaceNet(FRmodel)
```

<!-- #region colab_type="text" id="k19ftujTXzT2" -->
### Face Verification

Let's build a database containing one encoding vector for each person allowed to enter the happy house. To generate the encoding we use `img_to_encoding(image_path, model)` which basically runs the forward propagation of the model on the specified image. 

Run the following code to build the database (represented as a python dictionary). This database maps each person's name to a 128-dimensional encoding of their face.
<!-- #endregion -->

```python colab={"base_uri": "https://localhost:8080/", "height": 71} colab_type="code" executionInfo={"elapsed": 2387, "status": "ok", "timestamp": 1588893657870, "user": {"displayName": "Sparsh Agarwal", "photoUrl": "", "userId": "13037694610922482904"}, "user_tz": -330} id="oEnhvyw7XzT3" outputId="7dd7a2af-2565-49d6-e8ae-ee866996df4b"
database = {}
database["danielle"] = img_to_encoding("images/danielle.png", FRmodel)
database["younes"] = img_to_encoding("images/younes.jpg", FRmodel)
database["tian"] = img_to_encoding("images/tian.jpg", FRmodel)
database["andrew"] = img_to_encoding("images/andrew.jpg", FRmodel)
database["kian"] = img_to_encoding("images/kian.jpg", FRmodel)
database["dan"] = img_to_encoding("images/dan.jpg", FRmodel)
database["sebastiano"] = img_to_encoding("images/sebastiano.jpg", FRmodel)
database["bertrand"] = img_to_encoding("images/bertrand.jpg", FRmodel)
database["kevin"] = img_to_encoding("images/kevin.jpg", FRmodel)
database["felix"] = img_to_encoding("images/felix.jpg", FRmodel)
database["benoit"] = img_to_encoding("images/benoit.jpg", FRmodel)
database["arnaud"] = img_to_encoding("images/arnaud.jpg", FRmodel)
```

<!-- #region colab_type="text" id="A3jzrmAAXzT8" -->
You will have to go through the following steps:
1. Compute the encoding of the image from image_path
2. Compute the distance about this encoding and the encoding of the identity image stored in the database
3. Open the door if the distance is less than 0.7, else do not open.

As presented above, you should use the L2 distance (np.linalg.norm). (Note: In this implementation, compare the L2 distance, not the square of the L2 distance, to the threshold 0.7.) 
<!-- #endregion -->

```python colab={} colab_type="code" id="wC6NuBVkXzT-"
def verify(image_path, identity, database, model):
    """
    Function that verifies if the person on the "image_path" image is "identity".
    
    Arguments:
    image_path -- path to an image
    identity -- string, name of the person you'd like to verify the identity. Has to be a resident of the Happy house.
    database -- python dictionary mapping names of allowed people's names (strings) to their encodings (vectors).
    model -- your Inception model instance in Keras
    
    Returns:
    dist -- distance between the image_path and the image of "identity" in the database.
    door_open -- True, if the door should open. False otherwise.
    """
    
    
    # Step 1: Compute the encoding for the image. Use img_to_encoding() see example above. (≈ 1 line)
    encoding = img_to_encoding(image_path, model) 
    
    # Step 2: Compute distance with identity's image (≈ 1 line)
    dist = np.linalg.norm(encoding - database[identity])
    # Step 3: Open the door if dist < 0.7, else don't open (≈ 3 lines)
    if dist < 0.7:
        print("It's " + str(identity) + ", welcome!")
    else:
        print("It's not " + str(identity) + ", please go away")
        
        
    return dist
```

```python colab={"base_uri": "https://localhost:8080/", "height": 51} colab_type="code" executionInfo={"elapsed": 1507, "status": "ok", "timestamp": 1588893709531, "user": {"displayName": "Sparsh Agarwal", "photoUrl": "", "userId": "13037694610922482904"}, "user_tz": -330} id="0rELPZK_XzUG" outputId="9667fc82-04bf-41fe-ef84-6281ca74fe89"
verify("images/camera_0.jpg", "younes", database, FRmodel)
```

```python colab={"base_uri": "https://localhost:8080/", "height": 51} colab_type="code" executionInfo={"elapsed": 1399, "status": "ok", "timestamp": 1588893733210, "user": {"displayName": "Sparsh Agarwal", "photoUrl": "", "userId": "13037694610922482904"}, "user_tz": -330} id="XEljBbctXzUQ" outputId="753ed41c-106b-4bc5-8608-d1b26df93780"
verify("images/camera_2.jpg", "kian", database, FRmodel)
```

<!-- #region colab_type="text" id="JaHnjsHyXzUX" -->
### Face Recognition

Your face verification system is mostly working well. But since Kian got his ID card stolen, when he came back to the house that evening he couldn't get in! 

To reduce such shenanigans, you'd like to change your face verification system to a face recognition system. This way, no one has to carry an ID card anymore. An authorized person can just walk up to the house, and the front door will unlock for them! 

You'll implement a face recognition system that takes as input an image, and figures out if it is one of the authorized persons (and if so, who). Unlike the previous face verification system, we will no longer get a person's name as another input. 

You will have to go through the following steps:
1. Compute the target encoding of the image from image_path
2. Find the encoding from the database that has smallest distance with the target encoding. 
    - Initialize the `min_dist` variable to a large enough number (100). It will help you keep track of what is the closest encoding to the input's encoding.
    - Loop over the database dictionary's names and encodings. To loop use `for (name, db_enc) in database.items()`.
        - Compute L2 distance between the target "encoding" and the current "encoding" from the database.
        - If this distance is less than the min_dist, then set min_dist to dist, and identity to name.
<!-- #endregion -->

```python colab={} colab_type="code" id="0j2QcodEXzUY"
def who_is_it(image_path, database, model):
    """
    Implements face recognition for the happy house by finding who is the person on the image_path image.
    
    Arguments:
    image_path -- path to an image
    database -- database containing image encodings along with the name of the person on the image
    model -- your Inception model instance in Keras
    
    Returns:
    min_dist -- the minimum distance between image_path encoding and the encodings from the database
    identity -- string, the name prediction for the person on image_path
    """
    
   
    ## Step 1: Compute the target "encoding" for the image. Use img_to_encoding() see example above. ## (≈ 1 line)
    encoding = img_to_encoding(image_path, model)
    
    ## Step 2: Find the closest encoding ##
    
    # Initialize "min_dist" to a large value, say 100 (≈1 line)
    min_dist = 100
    # Loop over the database dictionary's names and encodings.
    for (name, db_enc) in database.items():
        # Compute L2 distance between the target "encoding" and the current "emb" from the database. (≈ 1 line)
        dist = np.linalg.norm(encoding - db_enc)

        # If this distance is less than the min_dist, then set min_dist to dist, and identity to name. (≈ 3 lines)
        if min_dist > dist:
            min_dist = dist
            identity = name

  
    if min_dist > 0.7:
        print("Not in the database.")
    else:
        print ("it's " + str(identity) + ", the distance is " + str(min_dist))
        
    return min_dist, identity
```

<!-- #region colab_type="text" id="YbgLP-FWXzUd" -->
Younes is at the front-door and the camera takes a picture of him ("images/camera_0.jpg"). Let's see if your who_it_is() algorithm identifies Younes. 
<!-- #endregion -->

```python colab={"base_uri": "https://localhost:8080/", "height": 51} colab_type="code" executionInfo={"elapsed": 1538, "status": "ok", "timestamp": 1588893866648, "user": {"displayName": "Sparsh Agarwal", "photoUrl": "", "userId": "13037694610922482904"}, "user_tz": -330} id="KwcNcIgtXzUf" outputId="7727945e-6069-4bc9-8683-97030af254c3"
who_is_it("images/camera_0.jpg", database, FRmodel)
```

<!-- #region colab_type="text" id="xYoAAlfxXzUr" -->
here're some ways to further improve the algorithm:
- Put more images of each person (under different lighting conditions, taken on different days, etc.) into the database. Then given a new image, compare the new face to multiple pictures of the person. This would increae accuracy.
- Crop the images to just contain the face, and less of the "border" region around the face. This preprocessing removes some of the irrelevant pixels around the face, and also makes the algorithm more robust.

<!-- #endregion -->
