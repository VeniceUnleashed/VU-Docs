---
title: UINametagCompData
---
### Base Classes

[UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UINametagCompData()                                                          | Create a new instance of this container type.                                                                             |
| UINametagCompData(UINametagCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UINametagCompData([UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) other)                | Upcast an instance of type [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) to [UINametagCompData](/vext/ref/fb/uinametagcompdata/).                |
| UINametagCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UINametagCompData](/vext/ref/fb/uinametagcompdata/).                  |
| UINametagCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UINametagCompData](/vext/ref/fb/uinametagcompdata/).                                      |
| UINametagCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UINametagCompData](/vext/ref/fb/uinametagcompdata/). |

## Properties

| Name            | Type                              | Description |
| --------------- | --------------------------------- | ----------- |
| squadTint       | [Vec4](/vext/ref/shared/class/vec4) |             |
| enemyTint       | [Vec4](/vext/ref/shared/class/vec4) |             |
| friendlyTint    | [Vec4](/vext/ref/shared/class/vec4) |             |
| orderCooldown   | number                            |             |
| tooltipCooldown | number                            |             |
| healthBarSize   | number                            |             |
| nameFontSize    | number                            |             |
| nameGlowSize    | number                            |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UINametagCompData](/vext/ref/fb/uinametagcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UINametagCompData](/vext/ref/fb/uinametagcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
