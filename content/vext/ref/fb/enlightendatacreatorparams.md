---
title: EnlightenDataCreatorParams
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenDataCreatorParams()                                                          | Create a new instance of this container type.                                                                                               |
| EnlightenDataCreatorParams(EnlightenDataCreatorParams other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| EnlightenDataCreatorParams([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenDataCreatorParams](/vext/ref/fb/enlightendatacreatorparams/). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| assetName | string |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EnlightenDataCreatorParams](/vext/ref/fb/enlightendatacreatorparams/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenDataCreatorParams](/vext/ref/fb/enlightendatacreatorparams/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
