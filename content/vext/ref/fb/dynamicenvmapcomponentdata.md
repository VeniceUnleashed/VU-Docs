---
title: DynamicEnvmapComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[DynamicEnvmapComponentData](#constructor-0)**() |
| **[DynamicEnvmapComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DynamicEnvmapComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[DynamicEnvmapComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DynamicEnvmapComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DynamicEnvmapComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "keyColorEnvmap" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "groundColorEnvmap" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "skyColorEnvmap" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "enable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DynamicEnvmapComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DynamicEnvmapComponentData {#constructor-0}

> **DynamicEnvmapComponentData**()

Creates a new [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata) frostbite instance.

### DynamicEnvmapComponentData {#constructor-1}

> **DynamicEnvmapComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DynamicEnvmapComponentData {#constructor-2}

> **DynamicEnvmapComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata). |

### DynamicEnvmapComponentData {#constructor-3}

> **DynamicEnvmapComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata). |

### DynamicEnvmapComponentData {#constructor-4}

> **DynamicEnvmapComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata). |

### DynamicEnvmapComponentData {#constructor-5}

> **DynamicEnvmapComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata). |

## Properties

### {{% prop-heading "keyColorEnvmap" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "groundColorEnvmap" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "skyColorEnvmap" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "enable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DynamicEnvmapComponentData](/vext/ref/fb/dynamicenvmapcomponentdata) type.

