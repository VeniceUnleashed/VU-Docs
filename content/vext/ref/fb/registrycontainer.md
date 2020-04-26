---
title: RegistryContainer
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[RegistryContainer](#constructor-0)**() |
| **[RegistryContainer](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RegistryContainer](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entityRegistry" >}} | [DataContainer](/vext/ref/shared/type/datacontainer)[] |
| {{< prop "assetRegistry" >}} | [DataContainer](/vext/ref/shared/type/datacontainer)[] |
| {{< prop "blueprintRegistry" >}} | [DataContainer](/vext/ref/shared/type/datacontainer)[] |
| {{< prop "referenceObjectRegistry" >}} | [DataContainer](/vext/ref/shared/type/datacontainer)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RegistryContainer" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RegistryContainer {#constructor-0}

> **RegistryContainer**()

Creates a new [RegistryContainer](/vext/ref/fb/registrycontainer) frostbite instance.

### RegistryContainer {#constructor-1}

> **RegistryContainer**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RegistryContainer](/vext/ref/fb/registrycontainer) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RegistryContainer {#constructor-2}

> **RegistryContainer**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RegistryContainer](/vext/ref/fb/registrycontainer). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RegistryContainer](/vext/ref/fb/registrycontainer). |

## Properties

### {{% prop-heading "entityRegistry" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**[]

### {{% prop-heading "assetRegistry" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**[]

### {{% prop-heading "blueprintRegistry" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**[]

### {{% prop-heading "referenceObjectRegistry" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RegistryContainer](/vext/ref/fb/registrycontainer) type.

