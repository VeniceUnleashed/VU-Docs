---
title: PersistentAwardDataStatRef
---
### Base Classes

[AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| PersistentAwardDataStatRef()                                                             | Create a new instance of this container type.                                                                                                  |
| PersistentAwardDataStatRef(PersistentAwardDataStatRef other)                             | Create a reference copy of an instance of the same type.                                                                                       |
| PersistentAwardDataStatRef([AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/) other) | Upcast an instance of type [AbstractPersistentStatRef](/vext/ref/fb/abstractpersistentstatref/) to [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref/). |
| PersistentAwardDataStatRef([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref/).    |

## Properties

| Name       | Type                   | Description |
| ---------- | ---------------------- | ----------- |
| definition | [AwardData](/vext/ref/fb/awarddata/) |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PersistentAwardDataStatRef](/vext/ref/fb/persistentawarddatastatref/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
