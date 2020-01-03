---
title: AbstractPersistentStatRef
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| AbstractPersistentStatRef()                                                          | Create a new instance of this container type.                                                                                             |
| AbstractPersistentStatRef(AbstractPersistentStatRef other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| AbstractPersistentStatRef([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/). |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
