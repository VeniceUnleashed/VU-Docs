---
title: DriverComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[DriverComponentData](#constructor-0)**() |
| **[DriverComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DriverComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[DriverComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DriverComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DriverComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "wantedSpeed" >}} | float |
| {{< prop "settings" >}} | [DriverSettings](/vext/ref/fb/driversettings) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DriverComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DriverComponentData {#constructor-0}

> **DriverComponentData**()

Creates a new [DriverComponentData](/vext/ref/fb/drivercomponentdata) frostbite instance.

### DriverComponentData {#constructor-1}

> **DriverComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DriverComponentData](/vext/ref/fb/drivercomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DriverComponentData {#constructor-2}

> **DriverComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [DriverComponentData](/vext/ref/fb/drivercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [DriverComponentData](/vext/ref/fb/drivercomponentdata). |

### DriverComponentData {#constructor-3}

> **DriverComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DriverComponentData](/vext/ref/fb/drivercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DriverComponentData](/vext/ref/fb/drivercomponentdata). |

### DriverComponentData {#constructor-4}

> **DriverComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DriverComponentData](/vext/ref/fb/drivercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DriverComponentData](/vext/ref/fb/drivercomponentdata). |

### DriverComponentData {#constructor-5}

> **DriverComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DriverComponentData](/vext/ref/fb/drivercomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DriverComponentData](/vext/ref/fb/drivercomponentdata). |

## Properties

### {{% prop-heading "wantedSpeed" %}}

> **float**

### {{% prop-heading "settings" %}}

> **[DriverSettings](/vext/ref/fb/driversettings)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DriverComponentData](/vext/ref/fb/drivercomponentdata) type.

