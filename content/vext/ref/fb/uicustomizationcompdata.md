---
title: UICustomizationCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| UICustomizationCompData()                                                          | Create a new instance of this container type.                                                                                         |
| UICustomizationCompData(UICustomizationCompData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| UICustomizationCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata/).                  |
| UICustomizationCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata/).                                      |
| UICustomizationCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata/). |

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
| [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICustomizationCompData](/vext/ref/fb/uicustomizationcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
