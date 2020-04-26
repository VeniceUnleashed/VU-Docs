---
title: OrderSettings
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[OrderSettings](#constructor-0)**() |
| **[OrderSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[OrderSettings](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[OrderSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "orders" >}} | [OrderReadiness](/vext/ref/fb/orderreadiness)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OrderSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OrderSettings {#constructor-0}

> **OrderSettings**()

Creates a new [OrderSettings](/vext/ref/fb/ordersettings) frostbite instance.

### OrderSettings {#constructor-1}

> **OrderSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OrderSettings](/vext/ref/fb/ordersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### OrderSettings {#constructor-2}

> **OrderSettings**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [OrderSettings](/vext/ref/fb/ordersettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [OrderSettings](/vext/ref/fb/ordersettings). |

### OrderSettings {#constructor-3}

> **OrderSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [OrderSettings](/vext/ref/fb/ordersettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [OrderSettings](/vext/ref/fb/ordersettings). |

## Properties

### {{% prop-heading "orders" %}}

> **[OrderReadiness](/vext/ref/fb/orderreadiness)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OrderSettings](/vext/ref/fb/ordersettings) type.

