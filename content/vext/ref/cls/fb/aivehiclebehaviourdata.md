---
title: AIVehicleBehaviourData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| AIVehicleBehaviourData()                                                          | Create a new instance of this container type.                                                                                       |
| AIVehicleBehaviourData(AIVehicleBehaviourData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| AIVehicleBehaviourData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AIVehicleBehaviourData](AIVehicleBehaviourData). |

## Properties

| Name       | Type                         | Description |
| ---------- | ---------------------------- | ----------- |
| name       | string                       |             |
| controls   | string\[\]                   |             |
| behaviours | string\[\]                   |             |
| goals      | string\[\]                   |             |
| intents    | [IntentData](IntentData)\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AIVehicleBehaviourData](AIVehicleBehaviourData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AIVehicleBehaviourData](AIVehicleBehaviourData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
