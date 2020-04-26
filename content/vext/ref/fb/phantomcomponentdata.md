---
title: PhantomComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[PhantomComponentData](#constructor-0)**() |
| **[PhantomComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PhantomComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[PhantomComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PhantomComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PhantomComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "boxSize" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "asyncQueryPointerAsset" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "enableTrajectoryOverride" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "trajectoryOverride" >}} | [AntRef](/vext/ref/fb/antref) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PhantomComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PhantomComponentData {#constructor-0}

> **PhantomComponentData**()

Creates a new [PhantomComponentData](/vext/ref/fb/phantomcomponentdata) frostbite instance.

### PhantomComponentData {#constructor-1}

> **PhantomComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PhantomComponentData](/vext/ref/fb/phantomcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PhantomComponentData {#constructor-2}

> **PhantomComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata). |

### PhantomComponentData {#constructor-3}

> **PhantomComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata). |

### PhantomComponentData {#constructor-4}

> **PhantomComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata). |

### PhantomComponentData {#constructor-5}

> **PhantomComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PhantomComponentData](/vext/ref/fb/phantomcomponentdata). |

## Properties

### {{% prop-heading "boxSize" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "asyncQueryPointerAsset" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "enableTrajectoryOverride" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "trajectoryOverride" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PhantomComponentData](/vext/ref/fb/phantomcomponentdata) type.

