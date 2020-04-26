---
title: EntityBusData
---

Inherits from [DataBusData](/vext/ref/fb/databusdata)

## Summary

### Constructors

|  |
| --- |
| **[EntityBusData](#constructor-0)**() |
| **[EntityBusData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EntityBusData](#constructor-2)**(other: [DataBusData](/vext/ref/fb/databusdata)) |
| **[EntityBusData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[EntityBusData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "eventConnections" >}} | [EventConnection](/vext/ref/fb/eventconnection)[] |
| {{< prop "descriptor" >}} | [InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata) \| nil |
| {{< prop "needNetworkId" >}} | bool |
| {{< prop "interfaceHasConnections" >}} | bool |
| {{< prop "alwaysCreateEntityBusClient" >}} | bool |
| {{< prop "alwaysCreateEntityBusServer" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EntityBusData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EntityBusData {#constructor-0}

> **EntityBusData**()

Creates a new [EntityBusData](/vext/ref/fb/entitybusdata) frostbite instance.

### EntityBusData {#constructor-1}

> **EntityBusData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EntityBusData](/vext/ref/fb/entitybusdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EntityBusData {#constructor-2}

> **EntityBusData**(other: [DataBusData](/vext/ref/fb/databusdata))

Casts an instance of type [DataBusData](/vext/ref/fb/databusdata) to [EntityBusData](/vext/ref/fb/entitybusdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataBusData](/vext/ref/fb/databusdata) | The instance to cast to [EntityBusData](/vext/ref/fb/entitybusdata). |

### EntityBusData {#constructor-3}

> **EntityBusData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [EntityBusData](/vext/ref/fb/entitybusdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [EntityBusData](/vext/ref/fb/entitybusdata). |

### EntityBusData {#constructor-4}

> **EntityBusData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EntityBusData](/vext/ref/fb/entitybusdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EntityBusData](/vext/ref/fb/entitybusdata). |

## Properties

### {{% prop-heading "eventConnections" %}}

> **[EventConnection](/vext/ref/fb/eventconnection)**[]

### {{% prop-heading "descriptor" %}}

> **[InterfaceDescriptorData](/vext/ref/fb/interfacedescriptordata)** \| **nil**

### {{% prop-heading "needNetworkId" %}}

> **bool**

### {{% prop-heading "interfaceHasConnections" %}}

> **bool**

### {{% prop-heading "alwaysCreateEntityBusClient" %}}

> **bool**

### {{% prop-heading "alwaysCreateEntityBusServer" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EntityBusData](/vext/ref/fb/entitybusdata) type.

