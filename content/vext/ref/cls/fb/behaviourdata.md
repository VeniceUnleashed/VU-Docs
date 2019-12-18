---
title: BehaviourData (Frostbite Container)
---
### Base Classes

[UrgencyUserData](UrgencyUserData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| BehaviourData()                                                          | Create a new instance of this container type.                                                                     |
| BehaviourData(BehaviourData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| BehaviourData([UrgencyUserData](UrgencyUserData) other)                  | Upcast an instance of type [UrgencyUserData](UrgencyUserData) to [BehaviourData](BehaviourData).                  |
| BehaviourData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BehaviourData](BehaviourData). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| name | string |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [BehaviourData](BehaviourData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BehaviourData](BehaviourData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
