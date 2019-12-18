---
title: UIPostProcessComponentData (Frostbite Container)
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UIPostProcessComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| UIPostProcessComponentData(UIPostProcessComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| UIPostProcessComponentData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIPostProcessComponentData](UIPostProcessComponentData).                  |
| UIPostProcessComponentData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIPostProcessComponentData](UIPostProcessComponentData).                                      |
| UIPostProcessComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIPostProcessComponentData](UIPostProcessComponentData). |

## Properties

| Name               | Type                         | Description |
| ------------------ | ---------------------------- | ----------- |
| highlightThreshold | number                       |             |
| xPower             | number                       |             |
| yPower             | number                       |             |
| distort            | number                       |             |
| timeScale          | number                       |             |
| noiseTexture       | [TextureAsset](TextureAsset) |             |
| highlight          | number                       |             |
| rShift             | number                       |             |
| gShift             | number                       |             |
| bShift             | number                       |             |
| tweakMode          | bool                         |             |
| enabled            | bool                         |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIPostProcessComponentData](UIPostProcessComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIPostProcessComponentData](UIPostProcessComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
