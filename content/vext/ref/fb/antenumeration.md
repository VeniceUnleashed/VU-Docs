---
title: AntEnumeration
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AntEnumeration](#constructor-0)**() |
| **[AntEnumeration](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AntEnumeration](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "antAsset" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "value" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AntEnumeration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AntEnumeration {#constructor-0}

> **AntEnumeration**()

Creates a new [AntEnumeration](/vext/ref/fb/antenumeration) frostbite instance.

### AntEnumeration {#constructor-1}

> **AntEnumeration**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AntEnumeration](/vext/ref/fb/antenumeration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AntEnumeration {#constructor-2}

> **AntEnumeration**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AntEnumeration](/vext/ref/fb/antenumeration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AntEnumeration](/vext/ref/fb/antenumeration). |

## Properties

### {{% prop-heading "antAsset" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "value" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AntEnumeration](/vext/ref/fb/antenumeration) type.

