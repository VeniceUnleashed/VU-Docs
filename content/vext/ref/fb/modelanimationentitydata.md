---
title: ModelAnimationEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[ModelAnimationEntityData](#constructor-0)**() |
| **[ModelAnimationEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ModelAnimationEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ModelAnimationEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ModelAnimationEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ModelAnimationEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "animationEntitySpace" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "boneToPlace" >}} | [GameplayBones](/vext/ref/fb/gameplaybones) |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "modelAnimationTransformType" >}} | [ModelAnimationTransformType](/vext/ref/fb/modelanimationtransformtype) |
| {{< prop "instanceSeed" >}} | int |
| {{< prop "defaultAnimation" >}} | string |
| {{< prop "animationIndex" >}} | int |
| {{< prop "animationSet" >}} | [AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset) \| nil |
| {{< prop "externalTime" >}} | float |
| {{< prop "rootMeshBoneName" >}} | string |
| {{< prop "jointWorldTransformUpdateOrder" >}} | [ModelAnimationUpdateOrder](/vext/ref/fb/modelanimationupdateorder) |
| {{< prop "connectBoneName" >}} | string |
| {{< prop "jointOutputPropertyIds" >}} | int[] |
| {{< prop "trajectoryBoneName" >}} | string |
| {{< prop "animationEntitySpaceActive" >}} | bool |
| {{< prop "playFirstFrame" >}} | bool |
| {{< prop "looping" >}} | bool |
| {{< prop "enableJointWorldTransformOutput" >}} | bool |
| {{< prop "resetAfterStop" >}} | bool |
| {{< prop "autoStart" >}} | bool |
| {{< prop "showDebugTransforms" >}} | bool |
| {{< prop "applyRotationCompensation" >}} | bool |
| {{< prop "applyPreTransformation" >}} | bool |
| {{< prop "disableCulling" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ModelAnimationEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ModelAnimationEntityData {#constructor-0}

> **ModelAnimationEntityData**()

Creates a new [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata) frostbite instance.

### ModelAnimationEntityData {#constructor-1}

> **ModelAnimationEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ModelAnimationEntityData {#constructor-2}

> **ModelAnimationEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata). |

### ModelAnimationEntityData {#constructor-3}

> **ModelAnimationEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata). |

### ModelAnimationEntityData {#constructor-4}

> **ModelAnimationEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata). |

### ModelAnimationEntityData {#constructor-5}

> **ModelAnimationEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata). |

## Properties

### {{% prop-heading "animationEntitySpace" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "boneToPlace" %}}

> **[GameplayBones](/vext/ref/fb/gameplaybones)**

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "modelAnimationTransformType" %}}

> **[ModelAnimationTransformType](/vext/ref/fb/modelanimationtransformtype)**

### {{% prop-heading "instanceSeed" %}}

> **int**

### {{% prop-heading "defaultAnimation" %}}

> **string**

### {{% prop-heading "animationIndex" %}}

> **int**

### {{% prop-heading "animationSet" %}}

> **[AntAnimationSetAsset](/vext/ref/fb/antanimationsetasset)** \| **nil**

### {{% prop-heading "externalTime" %}}

> **float**

### {{% prop-heading "rootMeshBoneName" %}}

> **string**

### {{% prop-heading "jointWorldTransformUpdateOrder" %}}

> **[ModelAnimationUpdateOrder](/vext/ref/fb/modelanimationupdateorder)**

### {{% prop-heading "connectBoneName" %}}

> **string**

### {{% prop-heading "jointOutputPropertyIds" %}}

> **int**[]

### {{% prop-heading "trajectoryBoneName" %}}

> **string**

### {{% prop-heading "animationEntitySpaceActive" %}}

> **bool**

### {{% prop-heading "playFirstFrame" %}}

> **bool**

### {{% prop-heading "looping" %}}

> **bool**

### {{% prop-heading "enableJointWorldTransformOutput" %}}

> **bool**

### {{% prop-heading "resetAfterStop" %}}

> **bool**

### {{% prop-heading "autoStart" %}}

> **bool**

### {{% prop-heading "showDebugTransforms" %}}

> **bool**

### {{% prop-heading "applyRotationCompensation" %}}

> **bool**

### {{% prop-heading "applyPreTransformation" %}}

> **bool**

### {{% prop-heading "disableCulling" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ModelAnimationEntityData](/vext/ref/fb/modelanimationentitydata) type.

