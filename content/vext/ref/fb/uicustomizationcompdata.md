---
title: UICustomizationCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UICustomizationCompData()                                                          | Create a new instance of this container type.                                                                                         |
| UICustomizationCompData(UICustomizationCompData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UICustomizationCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UICustomizationCompData](UICustomizationCompData).                  |
| UICustomizationCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UICustomizationCompData](UICustomizationCompData).                                      |
| UICustomizationCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICustomizationCompData](UICustomizationCompData). |

## Properties

| Name                 | Type                              | Description |
| -------------------- | --------------------------------- | ----------- |
| soldierOffset        | [Vec3](/vext/ref/shared/class/vec3) |             |
| soldierRotation      | [Vec3](/vext/ref/shared/class/vec3) |             |
| vehicleRotation      | [Vec3](/vext/ref/shared/class/vec3) |             |
| networkThrottleTimer | number                            |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UICustomizationCompData](UICustomizationCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICustomizationCompData](UICustomizationCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
