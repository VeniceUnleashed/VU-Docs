---
title: AIVehicleTypes
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| AIVehicleTypes()                                                          | Create a new instance of this container type.                                                                       |
| AIVehicleTypes(AIVehicleTypes other)                                      | Create a reference copy of an instance of the same type.                                                            |
| AIVehicleTypes([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [AIVehicleTypes](AIVehicleTypes).                                      |
| AIVehicleTypes([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIVehicleTypes](AIVehicleTypes). |

## Properties

| Name         | Type                                                 | Description |
| ------------ | ---------------------------------------------------- | ----------- |
| vehicleTypes | [AIVehicleBehaviourData](AIVehicleBehaviourData)\[\] |             |
| goals        | [BehaviourData](BehaviourData)\[\]                   |             |
| intents      | [BehaviourData](BehaviourData)\[\]                   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [AIVehicleTypes](AIVehicleTypes) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AIVehicleTypes](AIVehicleTypes) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
