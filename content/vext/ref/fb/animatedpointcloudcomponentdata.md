---
title: AnimatedPointCloudComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[AnimatedPointCloudComponentData](#constructor-0)**() |
| **[AnimatedPointCloudComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AnimatedPointCloudComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[AnimatedPointCloudComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AnimatedPointCloudComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AnimatedPointCloudComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "pointCloud" >}} | [AnimatedPointCloudAsset](/vext/ref/fb/animatedpointcloudasset) \| nil |
| {{< prop "externalTime" >}} | float |
| {{< prop "startPaused" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AnimatedPointCloudComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AnimatedPointCloudComponentData {#constructor-0}

> **AnimatedPointCloudComponentData**()

Creates a new [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata) frostbite instance.

### AnimatedPointCloudComponentData {#constructor-1}

> **AnimatedPointCloudComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AnimatedPointCloudComponentData {#constructor-2}

> **AnimatedPointCloudComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata). |

### AnimatedPointCloudComponentData {#constructor-3}

> **AnimatedPointCloudComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata). |

### AnimatedPointCloudComponentData {#constructor-4}

> **AnimatedPointCloudComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata). |

### AnimatedPointCloudComponentData {#constructor-5}

> **AnimatedPointCloudComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata). |

## Properties

### {{% prop-heading "pointCloud" %}}

> **[AnimatedPointCloudAsset](/vext/ref/fb/animatedpointcloudasset)** \| **nil**

### {{% prop-heading "externalTime" %}}

> **float**

### {{% prop-heading "startPaused" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AnimatedPointCloudComponentData](/vext/ref/fb/animatedpointcloudcomponentdata) type.

