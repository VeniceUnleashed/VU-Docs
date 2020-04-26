---
title: VaultWaypointData
---

Inherits from [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata)

## Summary

### Constructors

|  |
| --- |
| **[VaultWaypointData](#constructor-0)**() |
| **[VaultWaypointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VaultWaypointData](#constructor-2)**(other: [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata)) |
| **[VaultWaypointData](#constructor-3)**(other: [WaypointData](/vext/ref/fb/waypointdata)) |
| **[VaultWaypointData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "vaultTask" >}} | [AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VaultWaypointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VaultWaypointData {#constructor-0}

> **VaultWaypointData**()

Creates a new [VaultWaypointData](/vext/ref/fb/vaultwaypointdata) frostbite instance.

### VaultWaypointData {#constructor-1}

> **VaultWaypointData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VaultWaypointData](/vext/ref/fb/vaultwaypointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VaultWaypointData {#constructor-2}

> **VaultWaypointData**(other: [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata))

Casts an instance of type [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) to [VaultWaypointData](/vext/ref/fb/vaultwaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AbstractLocoWaypointData](/vext/ref/fb/abstractlocowaypointdata) | The instance to cast to [VaultWaypointData](/vext/ref/fb/vaultwaypointdata). |

### VaultWaypointData {#constructor-3}

> **VaultWaypointData**(other: [WaypointData](/vext/ref/fb/waypointdata))

Casts an instance of type [WaypointData](/vext/ref/fb/waypointdata) to [VaultWaypointData](/vext/ref/fb/vaultwaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WaypointData](/vext/ref/fb/waypointdata) | The instance to cast to [VaultWaypointData](/vext/ref/fb/vaultwaypointdata). |

### VaultWaypointData {#constructor-4}

> **VaultWaypointData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VaultWaypointData](/vext/ref/fb/vaultwaypointdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VaultWaypointData](/vext/ref/fb/vaultwaypointdata). |

## Properties

### {{% prop-heading "vaultTask" %}}

> **[AILocoVaultTaskData](/vext/ref/fb/ailocovaulttaskdata)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VaultWaypointData](/vext/ref/fb/vaultwaypointdata) type.

