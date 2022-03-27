"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9983],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,_=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(_,s(s({ref:t},p),{},{components:n})):r.createElement(_,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={},c="BCQ",l={unversionedId:"models/bcq",id:"models/bcq",title:"BCQ",description:"Current off-policy deep reinforcement learning algorithms fail to address extrapolation error by selecting actions with respect to a learned value estimate, without consideration of the accuracy of the estimate. As a result, certain outof-distribution actions can be erroneously extrapolated to higher values. However, the value of an off-policy agent can be accurately evaluated in regions where data is available.",source:"@site/docs/models/bcq.md",sourceDirName:"models",slug:"/models/bcq",permalink:"/recohut/docs/models/bcq",editUrl:"https://github.com/sparsh-ai/recohut/docs/models/bcq.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BASR",permalink:"/recohut/docs/models/basr"},next:{title:"Behavior Propensity Modeling",permalink:"/recohut/docs/models/beh-prop"}},p={},d=[{value:"Algorithm",id:"algorithm",level:2},{value:"Implementation",id:"implementation",level:2},{value:"PyTorch",id:"pytorch",level:3}],m={toc:d};function u(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bcq"},"BCQ"),(0,o.kt)("p",null,"Current off-policy deep reinforcement learning algorithms fail to address extrapolation error by selecting actions with respect to a learned value estimate, without consideration of the accuracy of the estimate. As a result, certain outof-distribution actions can be erroneously extrapolated to higher values. However, the value of an off-policy agent can be accurately evaluated in regions where data is available. "),(0,o.kt)("p",null,"Batch-Constrained deep Q-learning (BCQ), uses a state-conditioned generative model to produce only previously seen actions. This generative model is combined with a Q-network, to select the highest valued action which is similar to the data in the batch. Unlike any previous continuous control deep reinforcement learning algorithms, BCQ is able to learn successfully without interacting with the environment by considering extrapolation error."),(0,o.kt)("p",null,"BCQ is based on a simple idea: to avoid extrapolation error a policy should induce a similar state-action visitation to the batch. We denote policies which satisfy this notion as batch-constrained. To optimize off-policy learning for a given batch, batch-constrained policies are trained to select actions with respect to three objectives:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Minimize the distance of selected actions to the data in the batch."),(0,o.kt)("li",{parentName:"ol"},"Lead to states where familiar data can be observed."),(0,o.kt)("li",{parentName:"ol"},"Maximize the value function.")),(0,o.kt)("h2",{id:"algorithm"},"Algorithm"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Untitled",src:n(21273).Z,width:"412",height:"425"})),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("h3",{id:"pytorch"},"PyTorch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'class BCQ(nn.Module):\n    def __init__(\n            self,\n            generator,\n            gen_optim,\n            perturbator,\n            pert_optim,\n            critic1,\n            critic2,\n            critic_optim,\n            tau=0.001,\n            gamma=0.99,\n            lam=0.75,\n            policy_delay=1,\n            item_embeds=None,\n            device=torch.device("cpu")\n    ):\n        super(BCQ, self).__init__()\n        self.generator = generator\n        self.gen_optim = gen_optim\n        self.perturbator = perturbator\n        self.pert_optim = pert_optim\n        self.critic1 = critic1\n        self.critic2 = critic2\n        self.critic_optim = critic_optim\n        self.tau = tau\n        self.gamma = gamma\n        self.lam = lam\n        self.step = 1\n        self.policy_delay = policy_delay\n        self.perturbator_targ = deepcopy(perturbator)\n        self.critic1_targ = deepcopy(critic1)\n        self.critic2_targ = deepcopy(critic2)\n        for p in self.perturbator_targ.parameters():\n            p.requires_grad = False\n        for p in self.critic1_targ.parameters():\n            p.requires_grad = False\n        for p in self.critic2_targ.parameters():\n            p.requires_grad = False\n    #    item_embeds = torch.as_tensor(item_embeds).to(device)\n    #    self.item_embeds = item_embeds / (torch.norm(item_embeds, dim=1, keepdim=True) + 1e-7)\n        self.item_embeds = torch.as_tensor(item_embeds).to(device)\n\n    def update(self, data):\n        generator_loss, state, mean, std = self._compute_generator_loss(\n            data, self.item_embeds[data["action"]])\n        state_copy = state.detach().clone()\n        self.gen_optim.zero_grad()\n        generator_loss.backward()\n        self.gen_optim.step()\n\n        critic_loss, y, q1, q2 = self._compute_critic_loss(data)\n        self.critic_optim.zero_grad()\n        critic_loss.backward()\n        # torch.nn.utils.clip_grad_norm_(self.critic.parameters(), 0.5, 2)\n        self.critic_optim.step()\n\n        if self.policy_delay <= 1 or (\n                self.policy_delay > 1 and self.step % self.policy_delay == 0\n        ):\n            perturb_loss, action = self._compute_perturb_loss(state_copy)\n            self.pert_optim.zero_grad()\n            perturb_loss.backward()\n            self.pert_optim.step()\n\n            with torch.no_grad():\n                self.soft_update(self.perturbator, self.perturbator_targ)\n                self.soft_update(self.critic1, self.critic1_targ)\n                self.soft_update(self.critic2, self.critic2_targ)\n        else:\n            perturb_loss = action = None\n\n        self.step += 1\n        info = {\n            "generator_loss": generator_loss.cpu().detach().item(),\n            "perturbator_loss": (\n                perturb_loss.cpu().detach().item()\n                if perturb_loss is not None\n                else None\n            ),\n            "critic_loss": critic_loss.cpu().detach().item(),\n            "y": y.cpu().mean().item(),\n            "q1": q1.cpu().mean().item(),\n            "q2": q2.cpu().mean().item(),\n            "action": action,\n            "mean": mean.cpu().mean().item(),\n            "std": std.cpu().mean().item()\n        }\n        return info\n\n    def compute_loss(self, data):\n        generator_loss, state, mean, std = self._compute_generator_loss(\n            data, self.item_embeds[data["action"]])\n        critic_loss, y, q1, q2 = self._compute_critic_loss(data)\n        perturb_loss, action = self._compute_perturb_loss(state)\n        info = {\n            "generator_loss": generator_loss.cpu().detach().item(),\n            "perturbator_loss": (\n                perturb_loss.cpu().detach().item()\n                if perturb_loss is not None\n                else None\n            ),\n            "critic_loss": critic_loss.cpu().detach().item(),\n            "y": y.cpu().mean().item(),\n            "q1": q1.cpu().mean().item(),\n            "q2": q2.cpu().mean().item(),\n            "action": action,\n            "mean": mean.cpu().mean().item(),\n            "std": std.cpu().mean().item()\n        }\n        return info\n\n    def _compute_generator_loss(self, data, action):\n        state, recon, mean, std = self.generator(data, action)\n        recon_loss = F.mse_loss(recon, action)\n        kl_div = -0.5 * (\n                1 + torch.log(std.pow(2)) - mean.pow(2) - std.pow(2)\n        ).mean()\n        generator_loss = recon_loss + 0.5 * kl_div\n        return generator_loss, state, mean, std\n\n    def _compute_perturb_loss(self, state):\n        sampled_actions = self.generator.decode(state)\n        perturbed_actions = self.perturbator(state, sampled_actions)\n        perturb_loss = -self.critic1(state, perturbed_actions).mean()\n        return perturb_loss, perturbed_actions\n\n    def _compute_critic_loss(self, data):\n        with torch.no_grad():\n            r, done = data["reward"], data["done"]\n            batch_size = done.size(0)\n            next_s = self.generator.get_state(data, next_state=True)\n            next_s_repeat = torch.repeat_interleave(next_s, 10, dim=0)\n            sampled_actions = self.generator.decode(next_s_repeat)\n            perturbed_actions = self.perturbator_targ(next_s_repeat,\n                                                      sampled_actions)\n\n            q_targ1 = self.critic1_targ(next_s_repeat, perturbed_actions)\n            q_targ2 = self.critic2_targ(next_s_repeat, perturbed_actions)\n            q_targ = (\n                    self.lam * torch.min(q_targ1, q_targ2)\n                    + (1. - self.lam) * torch.max(q_targ1, q_targ2)\n            )\n            q_targ = q_targ.reshape(batch_size, -1).max(dim=1)[0]\n            y = r + self.gamma * (1. - done) * q_targ\n\n        s = self.generator.get_state(data).detach()\n        gen_actions = self.generator.decode(s)\n        a = self.perturbator(s, gen_actions).detach()\n        #  a = self.item_embeds[data["action"]]\n        q1 = self.critic1(s, a)\n        q2 = self.critic2(s, a)\n        critic_loss = F.mse_loss(q1, y) + F.mse_loss(q2, y)\n        return critic_loss, y, q1, q2\n\n    def soft_update(self, net, target_net):\n        for targ_param, param in zip(target_net.parameters(), net.parameters()):\n            targ_param.data.copy_(\n                targ_param.data * (1. - self.tau) + param.data * self.tau\n            )\n\n    def select_action(self, data, repeat_num=20, multi_sample=False):\n        with torch.no_grad():\n            if multi_sample:\n                batch_size = data["item"].size(0)\n                state = self.generator.get_state(data)\n                state = torch.repeat_interleave(state, repeat_num, dim=0)\n                gen_actions = self.generator.decode(state)\n                action = self.perturbator(state, gen_actions)\n                q1 = self.critic1(state, action).view(batch_size, -1)\n                indices = q1.argmax(dim=1)\n                action = action.view(batch_size, repeat_num, -1)\n                action = action[torch.arange(batch_size), indices, :]\n            else:\n                state = self.generator.get_state(data)\n                gen_actions = self.generator.decode(state)\n                action = self.perturbator(state, gen_actions)\n        return action\n\n    def forward(self, state):\n        gen_actions = self.generator.decode(state)\n        action = self.perturbator(state, gen_actions)\n        action = action / (torch.norm(action, dim=1, keepdim=True) + 1e-7)\n        item_embeds = self.item_embeds / (\n                torch.norm(self.item_embeds, dim=1, keepdim=True) + 1e-7\n        )\n        scores = torch.matmul(action, item_embeds.T)\n        _, rec_idxs = torch.topk(scores, 10, dim=1)\n        return rec_idxs\n')))}u.isMDXComponent=!0},21273:function(e,t,n){t.Z=n.p+"assets/images/content-models-raw-mp2-bcq-untitled-dffb3a9e5b95fc58a89dc7ddb56cd50c.png"}}]);