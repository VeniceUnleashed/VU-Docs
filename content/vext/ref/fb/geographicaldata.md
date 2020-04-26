---
title: GeographicalData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[GeographicalData](#constructor-0)**() |
| **[GeographicalData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[GeographicalData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "latitude" >}} | [UIGeoLatitude](/vext/ref/fb/uigeolatitude) |
| {{< prop "longitude" >}} | [UIGeoLongitude](/vext/ref/fb/uigeolongitude) |
| {{< prop "seaLevelOffset" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GeographicalData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GeographicalData {#constructor-0}
> **GeographicalData**()

Creates a new [GeographicalData](/vext/ref/fb/geographicaldata) frostbite instance.

### GeographicalData {#constructor-1}
> **GeographicalData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [GeographicalData](/vext/ref/fb/geographicaldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### GeographicalData {#constructor-2}
> **GeographicalData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GeographicalData](/vext/ref/fb/geographicaldata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [GeographicalData](/vext/ref/fb/geographicaldata). |

## Properties
### {{% prop-heading "latitude" %}}
> **[UIGeoLatitude](/vext/ref/fb/uigeolatitude)**

### {{% prop-heading "longitude" %}}
> **[UIGeoLongitude](/vext/ref/fb/uigeolongitude)**

### {{% prop-heading "seaLevelOffset" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GeographicalData](/vext/ref/fb/geographicaldata) type.

