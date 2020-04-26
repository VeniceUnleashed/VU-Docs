---
title: WarpAnimationEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[WarpAnimationEntityData](#constructor-0)**() |
| **[WarpAnimationEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WarpAnimationEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[WarpAnimationEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[WarpAnimationEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[WarpAnimationEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "connectTransform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "animationEntitySpacePriority" >}} | int |
| {{< prop "warpBinding" >}} | [WarpAnimationBinding](/vext/ref/fb/warpanimationbinding) |
| {{< prop "boneToAlign" >}} | [GameplayBones](/vext/ref/fb/gameplaybones) |
| {{< prop "forceAnimationTransform" >}} | bool |
| {{< prop "requireAnimationWeight" >}} | bool |
| {{< prop "externalConnectTransform" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WarpAnimationEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WarpAnimationEntityData {#constructor-0}

> **WarpAnimationEntityData**()

Creates a new [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata) frostbite instance.

### WarpAnimationEntityData {#constructor-1}

> **WarpAnimationEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WarpAnimationEntityData {#constructor-2}

> **WarpAnimationEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata). |

### WarpAnimationEntityData {#constructor-3}

> **WarpAnimationEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata). |

### WarpAnimationEntityData {#constructor-4}

> **WarpAnimationEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata). |

### WarpAnimationEntityData {#constructor-5}

> **WarpAnimationEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata). |

## Properties

### {{% prop-heading "connectTransform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "animationEntitySpacePriority" %}}

> **int**

### {{% prop-heading "warpBinding" %}}

> **[WarpAnimationBinding](/vext/ref/fb/warpanimationbinding)**

### {{% prop-heading "boneToAlign" %}}

> **[GameplayBones](/vext/ref/fb/gameplaybones)**

### {{% prop-heading "forceAnimationTransform" %}}

> **bool**

### {{% prop-heading "requireAnimationWeight" %}}

> **bool**

### {{% prop-heading "externalConnectTransform" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WarpAnimationEntityData](/vext/ref/fb/warpanimationentitydata) type.

