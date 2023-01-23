# Bannerboy Ad Naming Guidelines

## Why?

These guidelines are meant to make it easier for Bannerboy internal tools to communicate, by sharing the same naming convention.

For this first draft, we will often compare to what was previously called "Unit" in several tools.

Everything written here is open to debate.

## Creative vs Unit

For years, we've called things "Units".

## Width and Height vs dimensions

Dimensions as a string ie: `'300x250'` have been the standard. But almost every tool requires to parse the width and height. So there are constant conversions between that string, to these 2 values. This also increases error risks, as it's easy to forget to cast the parsed width and height to numbers when splitting the string.

To avoid this, it's recommended to use width and height as numbers.

For a fully responsive banner, it's recommended to use width and height of 1.

Because dimensions written that way is an industry standard, there are getters and setters. Which means you can still use them as previously. But it's no longer the main and recommended way.

## Size vs FileSize vs Weight

Size could be mistaken from dimensions. So, weight was proposed instead.

But, weight is not a standard is programming. Most tools and libraries, especially in JavaScript, use the word size, or filesize. I suggest sticking to this to match the standards.

Also, file size should be set in bytes. You're free to display them in any other units in your application. But this once again avoids parsing, and parsing errors. It also limits a bit of the hassle of choosing between kb and kib (1000 bytes, or 1024 bytes)

Quick tip: to make it easier to read in JavaScript, it's possible to use natively an underscore to seperate numbers wherever you want:

100000 > 100_000