<p align="center">
    <a href="https://croct.com">
      <img src="https://cdn.croct.io/brand/logo/repo-icon-green.svg" alt="Croct" height="80"/>
    </a>
    <br />
    <strong>Croct Docs</strong>
    <br />
    Learn how to integrate Croct into your application.
</p>

# Challenge

As a technical writer who recently joined the team, your task is to write the documentation that will walk developers
through the process of integrating Croct into their apps. You've invited Juliana, the Subject Matter Expert (SME),
for an interview to gather the information you need to start writing a documentation plan and the first section.

## Requirements

Completing the challenge will require you to:

- Write the document in English 🇺🇸
- Propose a table of contents for the documentation using [task-based headings](https://developers.google.com/tech-writing/two/large-docs#prefer_task-based_headings)
- [Outline the first sections of the document](https://developers.google.com/tech-writing/two/large-docs#outline_a_document), including a brief description of what each section will cover
- Fill the first section of the plan, or the first 1000 words, whichever is shorter
- Format the document using [Markdown](https://en.wikipedia.org/wiki/Markdown)

Outline example from the [Stripe Docs](https://stripe.com/docs):

```markdown
# Payments
Find a guide to integrate Stripe's payments APIs.

## Online Payments
Build a payment form or use a prebuilt checkout page to accept online payments.

### How cards work
See how a credit or debit card payment works online, step by step.

### Custom payment flow
Learn how to embed a custom Stripe payment form in your website or application.

# Developer tools
Get up and running with libraries, keys, and integration tools.

## Stripe CLI
Build, test, and manage your Stripe integration right from the terminal.

## Webhooks
Listen for events on your Stripe account so your integration can automatically trigger reactions.
```

## Interview

Here is the transcript of the interview:

> **Interviewer:** Hi Juliana! Thanks for accepting my invitation to the interview.
>
> **Juliana:** Hi there! I'm glad to help. Welcome to the team! 🙂
>
> **Interviewer:** Great! Let's start from the beginning: what exactly is Croct?
>
> **Juliana:** Croct is a SaaS platform that provides technology for real-time personalization. We provide unified and managed customer data for marketers, product managers, and software engineers to generate insights, toggle features to meet each customer's unique needs, and drive revenue with timely and relevant messages. The platform is also expertly designed for developers, allowing them to focus on building great products instead of expensive personalization infrastructure. By working with Croct, companies can take full advantage of first-party customer data to create a positive customer experience and increase their ROI.
>
> **Interviewer:** Great intro, thanks! Is Croct focused on a particular type of personalization?
>
> **Juliana:** Well, the possibilities are pretty much endless, but we focus on three main avenues: boost conversion, improve user experience, and increase engagement.
>
> **Interviewer:** I can't imagine a company that doesn't care about all three of those. Each application uses a different tech stack, though, how does Croct adapt to that? 🤔
>
>
> **Juliana:** Our focus is on providing a great developer experience on any platform and framework. We currently provide an SDK only for JavaScript, but we're working to support iOS and Android.
>
> **Interviewer:** Can you walk me through the implementation process?
>
> **Juliana:** The implementation process consists of gathering data, defining a personalization strategy and goal, and implementing. The first step is gathering the information that will fuel the personalization engine – it’s common to all other steps. The second step is defining the audience, whether it will be an experiment or not (like an A/B test), what will be personalized, and which metrics will help to measure the outcome of the personalization. The last step is actually implementing the personalization and, eventually, the tracking to measure the results.
>
> **Interviewer:** Ok, thanks for the details. So I guess this flow is common to all the implementations?
>
> **Juliana:** Yes, that's the same for both web (Vanilla JavaScript, React, Vue, NextJs, etc) and app (iOS and Android).
>
> **Interviewer:** What our customers use the platform for?
>
> **Juliana:** Marketing, product, and engineering teams use Croct to drive revenue with more targeted messages and to increase the near-term customer lifetime value.
>
> **Interviewer:** I heard that Croct created a programming language for non-developers, is it true? 😨
>
> **Juliana:** Yes! It's called CQL - Contextual Query Language. It's an intuitive query language that allows anyone - even those who never touched code before - to query information and make decisions without dealing with code, data processing, or other complicated stuff.
>
> **Interviewer:** Can you give me a few examples of CQL?
>
> **Juliana:** Sure! For example, `page's title` is a valid CQL expression that tells you the title of the page the user is currently viewing. Similarly, `user's name` will tell you the name of the user using your app. Simple as that.
>
> **Interviewer:** That seems really straightforward. It's plain English! 🤩
>
> **Juliana:** Yes! 😜
>
> **Interviewer:** So it's like SQL, but for non-developers?
>
> **Juliana:** You could say that, yes.
>
> **Interviewer:** Got it. What can you tell me about the target audience of the documentation?
>
> **Juliana:** The documentation is for developers that want to, or have to, integrate Croct into an application.
>
> **Interviewer:** I see. What would make the documentation good?
>
> **Juliana:** I guess it would be good if it is written in such a way that follows a logical progression of integration steps and is accessible to any developer from any level of skill.
>
> **Interviewer:** Could you give me references of what you consider a good documentation?
>
> **Juliana:** Developers really love the [Stripe docs](https://stripe.com/docs). They are really well laid out, easy to follow, and know what they are talking about. They have a good way of teaching the reader things without making it seem like it's boring. I also like the [Twilio doc](https://www.twilio.com/docs), they have some tutorials and it's got interactive demos, which developers really like. Last but not least, the [Launch Darkly docs](https://docs.launchdarkly.com/home/getting-started) solves some of the challenges that we have here.
>
> **Interviewer:** What do you think would make the documentation successful?
>
> **Juliana:** That's an easy one: reduce the integration time. We really need to make our onboarding process as smooth as possible.
>
> **Interviewer:** I see how the docs could help with that.
>
> **Interviewer:** I noticed that the voice and tone we use don't follow the formal style of most documentation. How would you describe Croct's brand voice?
>
> **Juliana:** [Croct's brand voice](https://croct.link/brand-voice) is professional yet friendly. It's not overly formal or complicated. We prefer conversational, but not too casual, language. We use contractions like "isn't" and "aren't" to make it sound more natural. Emojis are okay in moderation.
>
> **Interviewer:** That was the impression that I got while playing with the [quick start guide](https://github.com/croct-tech/plug-js/blob/master/docs/quick-start.md)!
>
> **Interviewer:** Is there any style guide in particular that we follow?
>
> **Juliana:** Yes, we really like the [Google style guide](https://developers.google.com/style), but the [IBM](https://www.ibm.com/developerworks/library/styleguidelines/index.html) and [Apple](https://help.apple.com/applestyleguide/) style guides are pretty good too.
>
> **Interviewer:** What is it specifically about their style guide that appeals to you?
>
> **Juliana:** I like that they are clean, organized, and succinct. They maintain a similar structure and content across different topics, so developers can tap through it without needing to read everything
>
> **Interviewer:** Well Juliana, I think I have a good understanding of what the documentation should cover and how it should be written. I'll get to work on the documentation plan now and I'll send it to you for review. Thank you for your time!
>
> **Juliana:** Anytime 🙂

## Deliverable

Please send us the repository's link to jobs@croct.com, and we will reply to your email with the next steps in the process.

We will do our best to review your project and get back with feedback on the result as soon as possible.
