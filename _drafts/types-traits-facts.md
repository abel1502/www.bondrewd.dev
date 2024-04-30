---
title: Types, traits and facts
# date: 2024-04-## ##:00:00 +0300
author: Andrew Belyaev
---

Despite my everlasting love for traits, some nuanced edge cases have bothered
me for a while. So today _(or, more likely by the time of publication, a week
or a month ago, given how it's going so far)_ I decided to write down and
formalize some of my thoughts on the matter. So, to begin with...

## What even is a trait?

Well, obviously, a trait is a piece of information about a value (or, rather,
about a set of values). For instance, "addable with an integer", "convertible to a
string", "a sequence of `MyStruct`s" are all traits. But there's more to it
than that. In most cases, at least judging by existing Rust code, a trait
include a set of methods that have to be present for a type to implement the
trait. Those methods actually constitute the _constructive proof_ of the
information carried by the trait -- i.e. if they are present, they provide
whatever functionality the trait promises. To constructively prove that `T` is
"convertible to a string", you provide a method that performs this conversion
-- simple and convenient.

But in Rust, you can also occasionally find traits like `Sync` or `Copy`,
which don't have any methods at all. The information they carry is too broad
to be constructively proven with some functionality. As another example, you
can think of "a sorted sequence of integers", or "an acyclic graph". While
you can ascribe some unique functionality to them, it wouldn't really be the
defining characteristic of what the trait means.

After carefully considering this, I decided to introduce another concept to
Bondrewd's core object model: "facts". A fact is any piece of information
about a value (or, again, about a set of those). A trait is then a particular
kind of fact that comes with a constructive proof. This means that the
non-trait facts require some other kind of proof. It might even just be a
promise from the programmer, as it is with the empty traits in Rust. But now
the next question arises...

## How does this fit into the type system?

_TODO_

<!--
TODO: Equality semantics; slots. Maybe in a different post?
Although equality is an interesting example of a trait: equality can be
different depending on how you perceive a specific object. For instance,
two `ptr[MyStruct]`s can be compared either by their address or by their
contents. The latter is equivalent to treating a pointer as an alternative
representation of the object it references, which ties nicely into
reinterpretations and facade- and representation types...
-->