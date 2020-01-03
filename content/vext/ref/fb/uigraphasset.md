---
title: UIGraphAsset
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| UIGraphAsset()                                                          | Create a new instance of this container type.                                                                   |
| UIGraphAsset(UIGraphAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| UIGraphAsset([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIGraphAsset](UIGraphAsset).                                      |
| UIGraphAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGraphAsset](UIGraphAsset). |

## Properties

| Name                | Type                                     | Description |
| ------------------- | ---------------------------------------- | ----------- |
| nodes               | [UINodeData](UINodeData)\[\]             |             |
| globalNode          | [GlobalNode](GlobalNode)                 |             |
| connections         | [UINodeConnection](UINodeConnection)\[\] |             |
| audioEventMappings  | [UIAudioEventAsset](UIAudioEventAsset)   |             |
| bundleAssetName     | string                                   |             |
| eventList           | [UIEventAsset](UIEventAsset)\[\]         |             |
| modal               | bool                                     |             |
| protectScreens      | bool                                     |             |
| isWin32UIGraphAsset | bool                                     |             |
| isXenonUIGraphAsset | bool                                     |             |
| isPs3UIGraphAsset   | bool                                     |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [UIGraphAsset](UIGraphAsset) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIGraphAsset](UIGraphAsset) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
