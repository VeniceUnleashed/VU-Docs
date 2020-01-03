---
title: GameSensingTemplateData
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| GameSensingTemplateData()                                                          | Create a new instance of this container type.                                                                                         |
| GameSensingTemplateData(GameSensingTemplateData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| GameSensingTemplateData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GameSensingTemplateData](GameSensingTemplateData).                                      |
| GameSensingTemplateData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameSensingTemplateData](GameSensingTemplateData). |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [GameSensingTemplateData](GameSensingTemplateData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameSensingTemplateData](GameSensingTemplateData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
