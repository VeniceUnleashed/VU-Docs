---
title: DataBusData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[DataBusData](#constructor-0)**() |
| **[DataBusData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DataBusData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[DataBusData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "propertyConnections" >}} | [PropertyConnection](/vext/ref/fb/propertyconnection)[] |
| {{< prop "linkConnections" >}} | [LinkConnection](/vext/ref/fb/linkconnection)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DataBusData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DataBusData {#constructor-0}
> **DataBusData**()

Creates a new [DataBusData](/vext/ref/fb/databusdata) frostbite instance.

### DataBusData {#constructor-1}
> **DataBusData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DataBusData](/vext/ref/fb/databusdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DataBusData {#constructor-2}
> **DataBusData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [DataBusData](/vext/ref/fb/databusdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [DataBusData](/vext/ref/fb/databusdata). |

### DataBusData {#constructor-3}
> **DataBusData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DataBusData](/vext/ref/fb/databusdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DataBusData](/vext/ref/fb/databusdata). |

## Properties
### {{% prop-heading "propertyConnections" %}}
> **[PropertyConnection](/vext/ref/fb/propertyconnection)**[]

### {{% prop-heading "linkConnections" %}}
> **[LinkConnection](/vext/ref/fb/linkconnection)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DataBusData](/vext/ref/fb/databusdata) type.

