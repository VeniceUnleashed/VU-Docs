---
title: RegistryContainer
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[RegistryContainer](#constructor-0)**() |
| **[RegistryContainer](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RegistryContainer](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entityRegistry" >}} | [DataContainer](/vext/ref/shared/class/datacontainer)[] |
| {{< prop "assetRegistry" >}} | [DataContainer](/vext/ref/shared/class/datacontainer)[] |
| {{< prop "blueprintRegistry" >}} | [DataContainer](/vext/ref/shared/class/datacontainer)[] |
| {{< prop "referenceObjectRegistry" >}} | [DataContainer](/vext/ref/shared/class/datacontainer)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RegistryContainer" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RegistryContainer {#constructor-0}
> **RegistryContainer**()

Creates a new [RegistryContainer](/vext/ref/fb/registrycontainer) frostbite instance.

### RegistryContainer {#constructor-1}
> **RegistryContainer**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RegistryContainer](/vext/ref/fb/registrycontainer) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RegistryContainer {#constructor-2}
> **RegistryContainer**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RegistryContainer](/vext/ref/fb/registrycontainer). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RegistryContainer](/vext/ref/fb/registrycontainer). |

## Properties
### {{% prop-heading "entityRegistry" %}}
> **[DataContainer](/vext/ref/shared/class/datacontainer)**[]

### {{% prop-heading "assetRegistry" %}}
> **[DataContainer](/vext/ref/shared/class/datacontainer)**[]

### {{% prop-heading "blueprintRegistry" %}}
> **[DataContainer](/vext/ref/shared/class/datacontainer)**[]

### {{% prop-heading "referenceObjectRegistry" %}}
> **[DataContainer](/vext/ref/shared/class/datacontainer)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RegistryContainer](/vext/ref/fb/registrycontainer) type.

