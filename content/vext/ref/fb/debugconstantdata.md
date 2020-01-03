---
title: DebugConstantData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| DebugConstantData()                                                          | Create a new instance of this container type.                                                                             |
| DebugConstantData(DebugConstantData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| DebugConstantData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [DebugConstantData](/vext/ref/fb/debugconstantdata/).                                      |
| DebugConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DebugConstantData](/vext/ref/fb/debugconstantdata/). |

## Properties

| Name              | Type   | Description |
| ----------------- | ------ | ----------- |
| botDebugDistance  | number |             |
| inViewModeFOV     | number |             |
| graphDataBuffer   | number |             |
| minDecisionTime   | number |             |
| inaccuracyEnabled | bool   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [DebugConstantData](/vext/ref/fb/debugconstantdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DebugConstantData](/vext/ref/fb/debugconstantdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
