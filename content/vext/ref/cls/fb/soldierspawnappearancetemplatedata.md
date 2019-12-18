---
title: SoldierSpawnAppearanceTemplateData (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                                 |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierSpawnAppearanceTemplateData()                                                          | Create a new instance of this container type.                                                                                                               |
| SoldierSpawnAppearanceTemplateData(SoldierSpawnAppearanceTemplateData other)                  | Create a reference copy of an instance of the same type.                                                                                                    |
| SoldierSpawnAppearanceTemplateData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [SoldierSpawnAppearanceTemplateData](SoldierSpawnAppearanceTemplateData).                                      |
| SoldierSpawnAppearanceTemplateData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierSpawnAppearanceTemplateData](SoldierSpawnAppearanceTemplateData). |

## Properties

| Name | Type   | Description |
| ---- | ------ | ----------- |
| body | number |             |

## Methods

| Type                                                                     | Name            | Parameters                                     |
| ------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierSpawnAppearanceTemplateData](SoldierSpawnAppearanceTemplateData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierSpawnAppearanceTemplateData](SoldierSpawnAppearanceTemplateData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
