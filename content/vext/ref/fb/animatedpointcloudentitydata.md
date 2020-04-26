---
title: AnimatedPointCloudEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[AnimatedPointCloudEntityData](#constructor-0)**() |
| **[AnimatedPointCloudEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AnimatedPointCloudEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[AnimatedPointCloudEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AnimatedPointCloudEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AnimatedPointCloudEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "pointCloud" >}} | [AnimatedPointCloudAsset](/vext/ref/fb/animatedpointcloudasset) \| nil |
| {{< prop "externalTime" >}} | float |
| {{< prop "startPaused" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AnimatedPointCloudEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AnimatedPointCloudEntityData {#constructor-0}

> **AnimatedPointCloudEntityData**()

Creates a new [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata) frostbite instance.

### AnimatedPointCloudEntityData {#constructor-1}

> **AnimatedPointCloudEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AnimatedPointCloudEntityData {#constructor-2}

> **AnimatedPointCloudEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata). |

### AnimatedPointCloudEntityData {#constructor-3}

> **AnimatedPointCloudEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata). |

### AnimatedPointCloudEntityData {#constructor-4}

> **AnimatedPointCloudEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata). |

### AnimatedPointCloudEntityData {#constructor-5}

> **AnimatedPointCloudEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "pointCloud" %}}

> **[AnimatedPointCloudAsset](/vext/ref/fb/animatedpointcloudasset)** \| **nil**

### {{% prop-heading "externalTime" %}}

> **float**

### {{% prop-heading "startPaused" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AnimatedPointCloudEntityData](/vext/ref/fb/animatedpointcloudentitydata) type.

