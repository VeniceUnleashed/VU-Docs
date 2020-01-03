---
title: BehaviourData
---
### Base Classes

[UrgencyUserData](/vext/ref/fb/urgencyuserdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| BehaviourData()                                                          | Create a new instance of this container type.                                                                     |
| BehaviourData(BehaviourData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| BehaviourData([UrgencyUserData](/vext/ref/fb/urgencyuserdata/) other)                  | Upcast an instance of type [UrgencyUserData](/vext/ref/fb/urgencyuserdata/) to [BehaviourData](/vext/ref/fb/behaviourdata/).                  |
| BehaviourData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BehaviourData](/vext/ref/fb/behaviourdata/). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [BehaviourData](/vext/ref/fb/behaviourdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BehaviourData](/vext/ref/fb/behaviourdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
