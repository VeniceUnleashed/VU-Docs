---
title: ModelAnimationEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ModelAnimationEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| ModelAnimationEntityData(ModelAnimationEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ModelAnimationEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ModelAnimationEntityData](ModelAnimationEntityData).                            |
| ModelAnimationEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ModelAnimationEntityData](ModelAnimationEntityData).                    |
| ModelAnimationEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ModelAnimationEntityData](ModelAnimationEntityData).              |
| ModelAnimationEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [ModelAnimationEntityData](ModelAnimationEntityData). |

## Properties

| Name                            | Type                                                       | Description |
| ------------------------------- | ---------------------------------------------------------- | ----------- |
| animationEntitySpace            | [LinearTransform](/vext/ref/cls/shr/LinearTransform)    |             |
| boneToPlace                     | [GameplayBones](GameplayBones)                             |             |
| realm                           | [Realm](Realm)                                             |             |
| modelAnimationTransformType     | [ModelAnimationTransformType](ModelAnimationTransformType) |             |
| instanceSeed                    | number                                                     |             |
| defaultAnimation                | string                                                     |             |
| animationIndex                  | number                                                     |             |
| animationSet                    | [AntAnimationSetAsset](AntAnimationSetAsset)               |             |
| externalTime                    | number                                                     |             |
| rootMeshBoneName                | string                                                     |             |
| jointWorldTransformUpdateOrder  | [ModelAnimationUpdateOrder](ModelAnimationUpdateOrder)     |             |
| connectBoneName                 | string                                                     |             |
| jointOutputPropertyIds          | number\[\]                                                 |             |
| trajectoryBoneName              | string                                                     |             |
| animationEntitySpaceActive      | bool                                                       |             |
| playFirstFrame                  | bool                                                       |             |
| looping                         | bool                                                       |             |
| enableJointWorldTransformOutput | bool                                                       |             |
| resetAfterStop                  | bool                                                       |             |
| autoStart                       | bool                                                       |             |
| showDebugTransforms             | bool                                                       |             |
| applyRotationCompensation       | bool                                                       |             |
| applyPreTransformation          | bool                                                       |             |
| disableCulling                  | bool                                                       |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ModelAnimationEntityData](ModelAnimationEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [ModelAnimationEntityData](ModelAnimationEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
