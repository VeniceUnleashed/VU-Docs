---
title: Hooks
---

![](/vext/tutorial/hooks.png)

Hooks son

NoFaTe - Yesterday at 3:51 PM

ok so

for datacontainers there's a couple extra properties

namely:

.isLazyLoading which returns true or false based on whether this datacontainer is currently being lazy-loaded

.isReadOnly pretty self explanatory

.instanceGuid the Guid of this instance, if it has one

and an extra method

:AsDC() which can be used to downcast any datacontainer-derived type down to a DataContainer instance(edited)
