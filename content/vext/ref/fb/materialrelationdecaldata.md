---
title: MaterialRelationDecalData
---
### Base Classes

[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                 | Description                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialRelationDecalData()                                                                                 | Create a new instance of this container type.                                                                                                                    |
| MaterialRelationDecalData(MaterialRelationDecalData other)                                                  | Create a reference copy of an instance of the same type.                                                                                                         |
| MaterialRelationDecalData([PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata/) to [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata/). |
| MaterialRelationDecalData([MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) other)               | Upcast an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata/) to [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata/).               |
| MaterialRelationDecalData([DataContainer](/vext/ref/shared/class/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata/).                        |

## Properties

| Name  | Type                                   | Description |
| ----- | -------------------------------------- | ----------- |
| decal | [DecalTemplateData](/vext/ref/fb/decaltemplatedata/) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
