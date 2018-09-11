p3xr.ui.overlay = new function() {
    const template = (options = {}) => {

        return `
<div id="p3xr-overlay">
    <div>
        <i class="fas fa-cog fa-spin fa-4x"></i>
        ${options.hasOwnProperty('message') ? "<br/><br/>" : ''}
        ${options.hasOwnProperty('message') ? options.message : ''}
    </div>
</div>
        
        `
    }

    this.show = (options = {}) => {
        //console.warn('p3xr.ui.overlay show')
        $body.append(template(options))
    }

    this.hide = () => {
        //console.warn('p3xr.ui.overlay hide')
        $body.find('#p3xr-overlay').remove()
    }
}