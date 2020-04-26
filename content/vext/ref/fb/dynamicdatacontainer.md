---
title: DynamicDataContainer
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[DynamicDataContainer](#constructor-0)**() |
| **[DynamicDataContainer](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DynamicDataContainer](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "fields" >}} | [DataField](/vext/ref/fb/datafield)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DynamicDataContainer" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DynamicDataContainer {#constructor-0}
> **DynamicDataContainer**()

Creates a new [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer) frostbite instance.

### DynamicDataContainer {#constructor-1}
> **DynamicDataContainer**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DynamicDataContainer {#constructor-2}
> **DynamicDataContainer**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer). |

## Properties
### {{% prop-heading "fields" %}}
> **[DataField](/vext/ref/fb/datafield)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer) type.

