---
title: UINametagCompData (Frostbite Container)
---
### Base Classes

[UI3dIconCompData](UI3dIconCompData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UINametagCompData()                                                          | Create a new instance of this container type.                                                                             |
| UINametagCompData(UINametagCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UINametagCompData([UI3dIconCompData](UI3dIconCompData) other)                | Upcast an instance of type [UI3dIconCompData](UI3dIconCompData) to [UINametagCompData](UINametagCompData).                |
| UINametagCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UINametagCompData](UINametagCompData).                  |
| UINametagCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UINametagCompData](UINametagCompData).                                      |
| UINametagCompData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UINametagCompData](UINametagCompData). |

## Properties

| Name            | Type                              | Description |
| --------------- | --------------------------------- | ----------- |
| squadTint       | [Vec4](/vext/ref/cls/shr/Vec4) |             |
| enemyTint       | [Vec4](/vext/ref/cls/shr/Vec4) |             |
| friendlyTint    | [Vec4](/vext/ref/cls/shr/Vec4) |             |
| orderCooldown   | number                            |             |
| tooltipCooldown | number                            |             |
| healthBarSize   | number                            |             |
| nameFontSize    | number                            |             |
| nameGlowSize    | number                            |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UINametagCompData](UINametagCompData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UINametagCompData](UINametagCompData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
