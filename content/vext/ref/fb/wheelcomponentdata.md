---
title: WheelComponentData
---

Inherits from [PartComponentData](/vext/ref/fb/partcomponentdata)

## Summary

### Constructors

|  |
| --- |
| **[WheelComponentData](#constructor-0)**() |
| **[WheelComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WheelComponentData](#constructor-2)**(other: [PartComponentData](/vext/ref/fb/partcomponentdata)) |
| **[WheelComponentData](#constructor-3)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[WheelComponentData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[WheelComponentData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[WheelComponentData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "config" >}} | [WheelConfigData](/vext/ref/fb/wheelconfigdata) \| nil |
| {{< prop "physicsType" >}} | [WheelPhysicsType](/vext/ref/fb/wheelphysicstype) |
| {{< prop "effectClampVelocity" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WheelComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WheelComponentData {#constructor-0}

> **WheelComponentData**()

Creates a new [WheelComponentData](/vext/ref/fb/wheelcomponentdata) frostbite instance.

### WheelComponentData {#constructor-1}

> **WheelComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WheelComponentData](/vext/ref/fb/wheelcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WheelComponentData {#constructor-2}

> **WheelComponentData**(other: [PartComponentData](/vext/ref/fb/partcomponentdata))

Casts an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata) to [WheelComponentData](/vext/ref/fb/wheelcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PartComponentData](/vext/ref/fb/partcomponentdata) | The instance to cast to [WheelComponentData](/vext/ref/fb/wheelcomponentdata). |

### WheelComponentData {#constructor-3}

> **WheelComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [WheelComponentData](/vext/ref/fb/wheelcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [WheelComponentData](/vext/ref/fb/wheelcomponentdata). |

### WheelComponentData {#constructor-4}

> **WheelComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [WheelComponentData](/vext/ref/fb/wheelcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [WheelComponentData](/vext/ref/fb/wheelcomponentdata). |

### WheelComponentData {#constructor-5}

> **WheelComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [WheelComponentData](/vext/ref/fb/wheelcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [WheelComponentData](/vext/ref/fb/wheelcomponentdata). |

### WheelComponentData {#constructor-6}

> **WheelComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WheelComponentData](/vext/ref/fb/wheelcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WheelComponentData](/vext/ref/fb/wheelcomponentdata). |

## Properties

### {{% prop-heading "config" %}}

> **[WheelConfigData](/vext/ref/fb/wheelconfigdata)** \| **nil**

### {{% prop-heading "physicsType" %}}

> **[WheelPhysicsType](/vext/ref/fb/wheelphysicstype)**

### {{% prop-heading "effectClampVelocity" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WheelComponentData](/vext/ref/fb/wheelcomponentdata) type.

