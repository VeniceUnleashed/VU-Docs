---
title: MaterialRelationDecalData (Frostbite Container)
---
### Base Classes

[PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                 | Description                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MaterialRelationDecalData()                                                                                 | Create a new instance of this container type.                                                                                                                    |
| MaterialRelationDecalData(MaterialRelationDecalData other)                                                  | Create a reference copy of an instance of the same type.                                                                                                         |
| MaterialRelationDecalData([PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) other) | Upcast an instance of type [PhysicsMaterialRelationPropertyData](PhysicsMaterialRelationPropertyData) to [MaterialRelationDecalData](MaterialRelationDecalData). |
| MaterialRelationDecalData([MaterialRelationPropertyData](MaterialRelationPropertyData) other)               | Upcast an instance of type [MaterialRelationPropertyData](MaterialRelationPropertyData) to [MaterialRelationDecalData](MaterialRelationDecalData).               |
| MaterialRelationDecalData([DataContainer](/vext/ref/cls/shr/datacontainer) other)                        | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MaterialRelationDecalData](MaterialRelationDecalData).                        |

## Properties

| Name  | Type                                   | Description |
| ----- | -------------------------------------- | ----------- |
| decal | [DecalTemplateData](DecalTemplateData) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MaterialRelationDecalData](MaterialRelationDecalData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MaterialRelationDecalData](MaterialRelationDecalData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
