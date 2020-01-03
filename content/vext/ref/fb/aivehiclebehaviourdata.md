---
title: AIVehicleBehaviourData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| AIVehicleBehaviourData()                                                          | Create a new instance of this container type.                                                                                       |
| AIVehicleBehaviourData(AIVehicleBehaviourData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| AIVehicleBehaviourData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIVehicleBehaviourData](AIVehicleBehaviourData). |

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
| [AIVehicleBehaviourData](AIVehicleBehaviourData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AIVehicleBehaviourData](AIVehicleBehaviourData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
