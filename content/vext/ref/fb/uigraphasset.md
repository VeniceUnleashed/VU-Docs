---
title: UIGraphAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| UIGraphAsset()                                                          | Create a new instance of this container type.                                                                   |
| UIGraphAsset(UIGraphAsset other)                                        | Create a reference copy of an instance of the same type.                                                        |
| UIGraphAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIGraphAsset](/vext/ref/fb/uigraphasset/).                                      |
| UIGraphAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGraphAsset](/vext/ref/fb/uigraphasset/). |

## Properties

| Name                | Type                                     | Description |
| ------------------- | ---------------------------------------- | ----------- |
| nodes               | [UINodeData](/vext/ref/fb/uinodedata/)\[\]             |             |
| globalNode          | [GlobalNode](/vext/ref/fb/globalnode/)                 |             |
| connections         | [UINodeConnection](/vext/ref/fb/uinodeconnection/)\[\] |             |
| audioEventMappings  | [UIAudioEventAsset](/vext/ref/fb/uiaudioeventasset/)   |             |
| bundleAssetName     | string                                   |             |
| eventList           | [UIEventAsset](/vext/ref/fb/uieventasset/)\[\]         |             |
| modal               | bool                                     |             |
| protectScreens      | bool                                     |             |
| isWin32UIGraphAsset | bool                                     |             |
| isXenonUIGraphAsset | bool                                     |             |
| isPs3UIGraphAsset   | bool                                     |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [UIGraphAsset](/vext/ref/fb/uigraphasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIGraphAsset](/vext/ref/fb/uigraphasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
