---
title: UIPostProcessComponentData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UIPostProcessComponentData()                                                          | Create a new instance of this container type.                                                                                               |
| UIPostProcessComponentData(UIPostProcessComponentData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| UIPostProcessComponentData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata/).                  |
| UIPostProcessComponentData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata/).                                      |
| UIPostProcessComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata/). |

## Properties

| Name               | Type                         | Description |
| ------------------ | ---------------------------- | ----------- |
| highlightThreshold | number                       |             |
| xPower             | number                       |             |
| yPower             | number                       |             |
| distort            | number                       |             |
| timeScale          | number                       |             |
| noiseTexture       | [TextureAsset](/vext/ref/fb/textureasset/) |             |
| highlight          | number                       |             |
| rShift             | number                       |             |
| gShift             | number                       |             |
| bShift             | number                       |             |
| tweakMode          | bool                         |             |
| enabled            | bool                         |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIPostProcessComponentData](/vext/ref/fb/uipostprocesscomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
