---
title: AimerModifierData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| AimerModifierData()                                                          | Create a new instance of this container type.                                                                             |
| AimerModifierData(AimerModifierData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| AimerModifierData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [AimerModifierData](/vext/ref/fb/aimermodifierdata/).                                      |
| AimerModifierData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AimerModifierData](/vext/ref/fb/aimermodifierdata/). |

## Properties

| Name                    | Type   | Description |
| ----------------------- | ------ | ----------- |
| lookSpeedMultiplier     | number |             |
| onlyInSupportedShooting | bool   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [AimerModifierData](/vext/ref/fb/aimermodifierdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AimerModifierData](/vext/ref/fb/aimermodifierdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
