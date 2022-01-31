<p align="center">
    <a href="https://croct.com">
      <img src="https://cdn.croct.io/brand/logo/repo-icon-green.svg" alt="Croct" height="80"/>
    </a>
    <br />
    <strong>Croct App</strong>
    <br />
    Create a personalized application using Croct.
</p>
<p align="center">
    <img alt="Language" src="https://img.shields.io/badge/language-TypeScript-blue" />
    <img alt="Build" src="https://img.shields.io/badge/build-passing-green" />
    <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-green" />
    <img alt="Maintainability" src="https://img.shields.io/badge/maintainability-100-green" />
</p>

# Challenge

As a Customer Success Engineer, you will be responsible for helping our customers to get the most out of our platform. Supporting marketers and developers means being creative, thinking out of the box, and empowering them.

## Requirements

In this challenge, the marketing team has asked you to implement a personalized banner on a webpage using our personalization management system (PMS). The content should change dynamically based on the user's persona.

![Example](https://user-images.githubusercontent.com/943036/116586841-44833900-a8f0-11eb-8d32-acec2eacee01.png)

Using Croct, we can do this by using slots and to help you with that, we've set up a sandbox account with all you need.

With our configurations, the PMS will decide which content to show to each user based on the slot's personalization rules and the user's context. Notice that there's no logic on the client-side, meaning that the marketing team can freely change the slot content as they need without requiring a new deployment.

The slot ID for your implementation is `home-banner` and it has the following structure:

```ts
type HomeBanner = {
    title: string,
    subtitle: string,
    cta: {
        label: string,
        link: string,
    },
};
```

The four available content and the respective personalization rule are:
- content for marketers: `user's persona is 'marketer'`
- content for developers: `user's persona is 'developer'`
- content for growth hackers: `user's persona is 'growth-hacker'`
- generic content: no rule (default content)

## Further Information

- The app ID for the sandbox account is `00000000-0000-0000-0000-000000000000`
- You can implement the slot by using our plug for [JS](https://github.com/croct-tech/plug-js/) or [React](https://github.com/croct-tech/plug-react):
    - If you choose the React plug, you should use the [Slot component](https://github.com/croct-tech/plug-react#using-slots) 
    - If you choose the JS plug, you should use the [fetch method](https://github.com/croct-tech/plug-js/blob/master/docs/plug.md#fetch)
- The `persona` is a **custom attribute** of the user profile. To understand how to set up the profile, we suggest you follow our [quick start guide](https://github.com/croct-tech/plug-js/blob/master/docs/quick-start.md) to learn using the [user profile patch](https://github.com/croct-tech/plug-js/blob/master/docs/user.md#edit)
- Feel free to create the functionality and UI/UX of the app as you want, but keep in mind we're only focused on the personalization implementation
- There is no problem with using other libraries/frameworks. The goal here is to evaluate your technical skills and understand how you deal with documentation
- If possible, test your application. We looove well-written and tested code!
- If you have any questions, we're here to support you! Please reach us on the `#support` channel in the [Croct Community](https://croct.link/community).

## Deliverable

Please send us the repository's link to jobs@croct.com, and we will reply to your email with the next steps in the process.

We will do our best to review your project and get back with feedback on the result as soon as possible.
