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

As a Customer Success Engineer, you will be responsible for helping our customers to get the most out of our platform.
Supporting marketers and developers means being creative, thinking out of the box, and empowering them.

## Requirements

![Example](https://user-images.githubusercontent.com/943036/116586841-44833900-a8f0-11eb-8d32-acec2eacee01.png)

The marketing team has asked you to integrate a personalized banner on their website using our Personalization
Management System (PMS). The ultimate goal is to dynamically change the content based on the user's persona without
deploying a new version on every change.

For cases like this, we recommend using the Slots feature. Using slots allows the marketing team to change the content
or personalization rules whenever needed without touching the code, exactly as they requested.

We've set up a sandbox account with all you need, including a slot with ID  `home-banner` and the following structure:

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

Lastly, there are four contents, each corresponding to one of the following personas:

| Persona        | Condition                           |
|----------------|-------------------------------------|
| Marketers      | `user's persona is 'marketer'`      |
| Developers     | `user's persona is 'developer'`     |
| Growth Hackers | `user's persona is 'growth-hacker'` |
| Other          | *(none)*                            |                             |

## Further Information

Here are some additional information you'll need to complete the integration:

- The app ID for the sandbox account is `00000000-0000-0000-0000-000000000000`.
- You can implement the slot by using our plug for [JS](https://github.com/croct-tech/plug-js/)
  or [React](https://github.com/croct-tech/plug-react):
    - If you choose the React plug, you should use
      the [Slot component](https://github.com/croct-tech/plug-react#using-slots)
    - If you choose the JS plug, you should use
      the [fetch method](https://github.com/croct-tech/plug-js/blob/master/docs/plug.md#fetch)
- The `persona` is a **custom attribute** of the user profile. To learn how to set up the profile, we suggest you follow
  our [quick start guide](https://github.com/croct-tech/plug-js/blob/master/docs/quick-start.md), especially
  the [user profile patch section](https://github.com/croct-tech/plug-js/blob/master/docs/user.md#edit)
- Feel free to design the functionality and UI/UX of the app as you want, but keep in mind we're only focused on the
  personalization implementation
- There is no problem with using other libraries/frameworks. The objective here is to assess your technical skills and
  understand how you deal with documentation
- If possible, test your application. We absolutely love well-written and tested code! 😍
- If you have any questions, we're here to support you! Please reach us on the `#challenges` channel in
  the [Croct Community](https://croct.link/community).

### Important!

The `croct.fetch` API is currently in preview and is enabled only for our Early-Access Program participants.  
If you receive the error _"The fetch feature is currently available only to accounts participating in our Early-Access
Program (EAP)"_, insert the following tag in your `head` block before calling `croct.plug` to enable the EAP features:

```html

<head>
    <script src="https://cdn.croct.io/js/v1/app/00000000-0000-0000-0000-000000000000/custom.js"></script>
    <!-- The tag above should be before the following call -->
    <script>croct.plug()</script>
</head>
```

## Deliverable

Please send us the repository's link to jobs@croct.com, and we will reply to your email with the next steps in the
process.

We will do our best to review your project and get back with feedback on the result as soon as possible.
