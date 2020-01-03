---
title: MeshVariationDatabase
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| MeshVariationDatabase()                                                          | Create a new instance of this container type.                                                                                     |
| MeshVariationDatabase(MeshVariationDatabase other)                               | Create a reference copy of an instance of the same type.                                                                          |
| MeshVariationDatabase([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase/).                                      |
| MeshVariationDatabase([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase/). |

## Properties

| Name            | Type                                                         | Description |
| --------------- | ------------------------------------------------------------ | ----------- |
| entries         | [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry/)\[\] |             |
| redirectEntries | [MeshVariationDatabaseEntry](/vext/ref/fb/meshvariationdatabaseentry/)\[\] |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MeshVariationDatabase](/vext/ref/fb/meshvariationdatabase/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
