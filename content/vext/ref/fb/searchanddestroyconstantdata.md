---
title: SearchAndDestroyConstantData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| SearchAndDestroyConstantData()                                                          | Create a new instance of this container type.                                                                                                   |
| SearchAndDestroyConstantData(SearchAndDestroyConstantData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| SearchAndDestroyConstantData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata/).                                      |
| SearchAndDestroyConstantData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata/). |

## Properties

| Name                          | Type   | Description |
| ----------------------------- | ------ | ----------- |
| timeToWaitMin                 | number |             |
| timeToWaitMax                 | number |             |
| defaultSearchAndDestroyRadius | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SearchAndDestroyConstantData](/vext/ref/fb/searchanddestroyconstantdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
