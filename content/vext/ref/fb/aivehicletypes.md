---
title: AIVehicleTypes
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| AIVehicleTypes()                                                          | Create a new instance of this container type.                                                                       |
| AIVehicleTypes(AIVehicleTypes other)                                      | Create a reference copy of an instance of the same type.                                                            |
| AIVehicleTypes([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AIVehicleTypes](/vext/ref/fb/aivehicletypes/).                                      |
| AIVehicleTypes([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIVehicleTypes](/vext/ref/fb/aivehicletypes/). |

## Properties

| Name         | Type                                                 | Description |
| ------------ | ---------------------------------------------------- | ----------- |
| vehicleTypes | [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata/)\[\] |             |
| goals        | [BehaviourData](/vext/ref/fb/behaviourdata/)\[\]                   |             |
| intents      | [BehaviourData](/vext/ref/fb/behaviourdata/)\[\]                   |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [AIVehicleTypes](/vext/ref/fb/aivehicletypes/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AIVehicleTypes](/vext/ref/fb/aivehicletypes/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
