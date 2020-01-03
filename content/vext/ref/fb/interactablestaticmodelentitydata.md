---
title: InteractableStaticModelEntityData
---
### Base Classes

[StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InteractableStaticModelEntityData()                                                          | Create a new instance of this container type.                                                                                                             |
| InteractableStaticModelEntityData(InteractableStaticModelEntityData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| InteractableStaticModelEntityData([StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/) other)      | Upcast an instance of type [StaticModelEntityData](/vext/ref/fb/staticmodelentitydata/) to [InteractableStaticModelEntityData](/vext/ref/fb/interactablestaticmodelentitydata/).      |
| InteractableStaticModelEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [InteractableStaticModelEntityData](/vext/ref/fb/interactablestaticmodelentitydata/).      |
| InteractableStaticModelEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [InteractableStaticModelEntityData](/vext/ref/fb/interactablestaticmodelentitydata/).                    |
| InteractableStaticModelEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [InteractableStaticModelEntityData](/vext/ref/fb/interactablestaticmodelentitydata/).              |
| InteractableStaticModelEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [InteractableStaticModelEntityData](/vext/ref/fb/interactablestaticmodelentitydata/).                            |
| InteractableStaticModelEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [InteractableStaticModelEntityData](/vext/ref/fb/interactablestaticmodelentitydata/).                    |
| InteractableStaticModelEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [InteractableStaticModelEntityData](/vext/ref/fb/interactablestaticmodelentitydata/).              |
| InteractableStaticModelEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InteractableStaticModelEntityData](/vext/ref/fb/interactablestaticmodelentitydata/). |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InteractableStaticModelEntityData](/vext/ref/fb/interactablestaticmodelentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InteractableStaticModelEntityData](/vext/ref/fb/interactablestaticmodelentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
