---
title: GameSensingTemplateData
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| GameSensingTemplateData()                                                          | Create a new instance of this container type.                                                                                         |
| GameSensingTemplateData(GameSensingTemplateData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| GameSensingTemplateData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata/).                                      |
| GameSensingTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata/). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
